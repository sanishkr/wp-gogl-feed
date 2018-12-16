import React, { Component } from "react";

class Carditem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className="col-6 col-md-4 col-lg-3 p-1 p-md-2">
            <div className="card text-center pt-3">
                <img className="card-img-top" src={this.props.feeditem.link.linkURL} alt="Card Icon" />
            {/* <span className="mt-1 card-img"><i className="fas fa-shopping-cart"></i></span> */}
                <div className="card-body">
                    <h5 className="card-title">No. of Images {this.props.feeditem.images.length}</h5>
                    <h5 className="card-title">No. of Videos {this.props.feeditem.videos.length}</h5>
                    <p className="card-text text-muted"><small>Feed Enabled: {this.props.feeditem.stats.feedStatus} </small></p>
                    <p className="card-text text-muted"><small>Feed Cteated At: {this.props.feeditem.stats.createdAt} </small></p>
                    <a href="#" className="btn btn-success">{this.props.feeditem.email}</a>
                </div>
            </div>
        </div>
    }
}
export default Carditem;