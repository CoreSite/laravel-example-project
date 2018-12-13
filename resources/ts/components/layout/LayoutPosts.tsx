import * as React from "react";
import NavHeader from "../element/NavHeader";

export default class LayoutPosts extends React.Component {
    render() {
        return <React.Fragment>
            <NavHeader/>
            <div className="py-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">News</div>
                                <div className="card-body">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">First post</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">2018-12-10 13:05:15</h6>
                                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy
                                                text ever since the 1500s, when an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book. It has survived not only five
                                                centuries, but also the leap into electronic typesetting, remaining essentially
                                                unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                                containing Lorem Ipsum passages, and more recently with desktop publishing
                                                software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Second post</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">2018-12-10 13:06:03</h6>
                                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry&#039;s standard
                                                dummy text ever since the 1500s, when an unknown printer took a galley of
                                                type and scrambled it to make a type specimen book. It has survived not only
                                                five centuries, but also the leap into electronic typesetting, remaining
                                                essentially unchanged. It was popularised in the 1960s with the release of
                                                Letraset sheets containing Lorem Ipsum passages, and more recently with
                                                desktop publishing software like Aldus PageMaker including versions of Lorem
                                                Ipsum.</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Second post</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">2018-12-10 13:06:03</h6>
                                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry&#039;s standard
                                                dummy text ever since the 1500s, when an unknown printer took a galley of
                                                type and scrambled it to make a type specimen book. It has survived not only
                                                five centuries, but also the leap into electronic typesetting, remaining
                                                essentially unchanged. It was popularised in the 1960s with the release of
                                                Letraset sheets containing Lorem Ipsum passages, and more recently with
                                                desktop publishing software like Aldus PageMaker including versions of Lorem
                                                Ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}
