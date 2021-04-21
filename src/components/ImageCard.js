import React, { Component, createRef } from 'react'

class ImageCard extends Component {
    constructor(props){
        super(props);
        this.imgRef = createRef();
    }

    componentDidMount(){
        console.log(this.imgRef)
    }

    render() {
        return (
            <div>
                <img ref= {this.imgRef} src={this.props.image.urls.regular} alt={this.props.image.urls.regular}/>                
            </div>
        )
    }
}

export default ImageCard
