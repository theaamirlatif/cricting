import React, { useState } from 'react'
import Footer from './inc/Footer'
import Header from './inc/Header'
import TopNav from './inc/TopNav';

const About = () => {

    //const [img, setImg] = useState("")
    const [pimg, setPimg] = useState("")
    const [uname, setUname] = useState("")
    const [ptitle, setPtitle] = useState("")
    const [pdesc, setPdesc] = useState("")
    const [btnText, setBtnText] = useState("Save")

    async function save() {

        setBtnText("Post Adding...")
        const formData = new FormData()
        formData.append('pimg', pimg)
        formData.append('uname', uname)
        formData.append('ptitle', ptitle)
        formData.append('pdesc', pdesc)

        let result = await fetch(window.api + "Post", {
            method: 'POST',
            body: formData,
        })

        result = await result.json()
        if (result.already) {
            setBtnText("Cnic exist")
        } else {
            setBtnText("Save Successfully!")
            setPimg("")
            setUname("")
            setPtitle("")
            setPdesc("")
            setBtnText("Save")
        }

    }

    async function handleImage(file) {
        setPimg(file[0])
        const formData = new FormData()
        formData.append('pimg', file[0])

        let result = await fetch(window.api + "uploadPostImage", {
            method: 'POST',
            body: formData,
        })
        result = await result.json()
        setPimg(result.path)
    }

    return (
        <>
            <div className="container-scroller">
                <TopNav />
                <Header />
                <form className="form-sample">
                    <p className="card-description"> Personal info </p>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-12 col-form-label">Upload Your Profile Image by pixels 512x512... </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Upload Image</label>
                                <div className="col-sm-9">
                                    <input type="file" className="form-control"
                                        onChange={(e) => handleImage(e.target.files)} placeholder="Select image..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Poster Name</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" value={uname}
                                        onChange={(e) => setUname(e.target.value)} placeholder="Poster Name" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Post Title</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" value={ptitle}
                                        onChange={(e) => setPtitle(e.target.value)} placeholder="Post Title" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">DESC</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" value={pdesc}
                                        onChange={(e) => setPdesc(e.target.value)} placeholder="add description" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mySave">
                        <div className="text-center ">
                            <button type="button" value="submit" onClick={save} className="btn btn-primary btn-block enter-btn">{btnText}</button>
                        </div>
                    </div>
                </form>
                <Footer />
            </div>
        </>
    )
};

export default About;
