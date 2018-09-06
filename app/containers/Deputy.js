import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/index'
import styles from '../static/EntryPage.css'

class Deputy extends React.Component {
  // берем координаты точек
  componentDidMount() {
    const x = document.getElementsByClassName('Dep')
//    console.log('x=', x)
    let i
    const coordinates = []
    for (i = 0; i < x.length; i++) {
      coordinates.push(x[i].getBoundingClientRect())
    }
    console.log('y=', coordinates)
    const coordsFin = coordinates.map(j => ({ x: j.x, y: j.y }))
    console.log('coordsFin=', coordsFin)
    this.props.coords(coordsFin)
  }

  render() {
    return (
      <div>
        <div className={`${styles.Dep1} Dep`} />
        <div className={`${styles.Dep2} Dep`} />

        {
          this.props.coordsPar !== null &&
            (
            <svg width="1000" height="1000" style={{ position: 'absolute', zIndex: -1, left: 0, top: 0 }}>
              <line
                x1={this.props.coordsPar[0].x}
                y1={this.props.coordsPar[0].y}
                x2={this.props.coordsPar[1].x}
                y2={this.props.coordsPar[1].y}
                style={{ stroke: 'black', strokWidth: 2 }}
              />
            </svg>
            )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    coordsPar: state.Coords,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    coords: par => dispatch(actions.coordsAdded(par)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Deputy)

