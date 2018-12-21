import React, { Component } from "react";

class Carditem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className="col-12 col-md-12 col-lg-12 p-1 p-md-2">
            <div className="card text-center pt-3">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={this.props.feeditem.videos[0]} ></iframe>
            </div>
                {/* <img className="card-img-top" src={this.props.feeditem.link.linkURL} alt="Card Icon" /> */}
            {/* <span className="mt-1 card-img"><i className="fas fa-shopping-cart"></i></span> */}
                <div className="card-body">
                    {/* <h5 className="card-title">No. of Images {this.props.feeditem.images.length}</h5> */}
                    {/* <h5 className="card-title">No. of Videos {this.props.feeditem.videos.length}</h5> */}
                    <h5 className="card-title"><small>{this.props.feeditem.text} </small></h5>
                    <p className="card-text text-muted">Video URL: <i>{this.props.feeditem.videos[0]}</i></p>
                    <p className="card-text text-muted"><small>Feed Cteated At: {this.props.feeditem.stats.createdAt} </small></p>
                    <a href="#" className="btn btn-success">{this.props.feeditem.email}</a>
                </div>
            </div>
        </div>
    }
}
export default Carditem;