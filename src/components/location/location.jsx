import React, { Component } from 'react';
import { GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow } from "react-google-maps";

const Location = withScriptjs(
    withGoogleMap(
        props => (
        <GoogleMap
            defaultZoom={15}
                defaultCenter={{ lat: 31.776918390835117, lng: 35.20546751144723}}
                
        >
            
            {props.isMarkerShown && <Marker position={{ lat: 31.776918390835117, lng: 35.20546751144723 }} onClick={() => props.handleToggleOpen()}>
            {props.isOpen && (
              <InfoWindow onCloseClick={() => props.handleToggleClose()}>
                <div><h1>Homemade food</h1><p>phone: 414141414</p><p>address: Lorem ipsum dolor sit.</p><img src="https://cdn.singulart.com/artworks/v2/cropped/5877/main/fhd/713867_6ed990ab826a4975c232711091e55cdc.jpeg" style={{width:"180px"}}/></div>
              </InfoWindow>
            )}
                </Marker>}
        </GoogleMap>
        )
    )
)
 
export default Location;