
import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import marker from './images/maps_marker.png';


class Suggestion extends Component {
    state = {
        iconPin: {
            url: marker,
        }
        ,
        data: {},
        loading: true,
        loadingButton: false
    }

    componentDidMount() {
        this.renderMap();
        this.getPlace();
    }

    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA&callback=initMap")
        window.initMap = this.initMap
    }


    // Getting a suggestion from the API 
    getPlace = () => {

        // set the suggestion button to loading 
        this.setState({ loadingButton: true });

        axios({
            url: "https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&get_param=value"
        }).then(res => {

            this.setState({ data: res.data });

            this.setState({ loading: false });

            // set the suggestion button to اقتراح اخر
            this.setState({ loadingButton: false });

            console.log(res.data);
            // Create A Map
            var map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lng: parseFloat(this.state.data.lon), lat: parseFloat(this.state.data.lat) },
                zoom: 17
            })

            // Create A Marker
            var marker = new window.google.maps.Marker({
                position: { lat: parseFloat(this.state.data.lat), lng: parseFloat(this.state.data.lon) },
                map: map,
                icon: this.state.iconPin
            })

        })

    };

    render() {
        let loadingButton;
        if (this.state.loadingButton) {
            loadingButton = <div>
                <div class="spinner-grow" role="status"> </div>
                <div class="spinner-grow" role="status"> </div>
                <div class="spinner-grow" role="status"> </div>
            </div>
        }
        else {
            loadingButton = "اقتراح آخر"
        }
        let data;

        if (this.state.loading) {
            data = <div class="spinner-border" style={{
                width: "8rem", height: " 8rem", marginTop: "200px", marginBottom: "100px"
            }
            } role="status" >
            </div >
        }


        else {
            data = <div>
                <div style={{ height: "100px", margin: "auto", padding: "auto" }} >
                    <a href={this.state.data.link} className="link" target="blank">
                        <h1>{this.state.data.name}</h1>
                    </a>
                </div>
                <div>
                    <div id="map">
                    </div>
                    <a target="blank" href={`https://www.google.com/maps/?q=${this.state.data.lat},${this.state.data.lon}`}>
                        <div class="mapButton">Google Maps فتح في</div>
                    </a>
                    <div class="suggestionButton2" onClick={this.getPlace}>
                        {loadingButton}
                    </div>
                </div>
            </div>
        }
        return (
            <main>
                {data}
            </main>
        );
    }
}

function loadScript(url) {
    var index = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}
export default Suggestion;
