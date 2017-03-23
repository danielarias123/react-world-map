import React, { Component } from 'react';
import Datamaps from 'datamaps';

const mapStyle = {
  width: '100%',
  height: 500,
  position: 'relative',
};

class WorldMap extends Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.state = {
      mapStyle: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    };
  }

  componentDidMount = () => {
    this.map = this.renderMap();

    // Add listener to resize map
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount = () => window.removeEventListener('resize', this.onResize);

  onResize = () => this.map ? this.map.resize() : null;


  renderMap = () => new Datamaps({
    element: document.getElementById('map-container'),
  });

  render = () => <div id="map-container" style={{ ...mapStyle, ...this.state.mapStyle }} />;
}

export default WorldMap;
