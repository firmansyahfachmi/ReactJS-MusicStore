import React, {Component, Fragment} from 'react';

import ModalLayer from '../modal/modalHome.jsx'
import CardHome from "../card/cardHome.jsx";
import Search from "../search-bar/search.jsx";


import './home.css';

class Home extends Component{
        state = {
            data : [
                {   
                    id:1,
                    name: "Violin",
                    category: "Violin",
                    url: "https://s3-alpha-sig.figma.com/img/1d00/3227/47842acb21ef766a28693a6f8f5a6dae?Expires=1567987200&Signature=J9hCOo1U6FIy-FgrtusmM65kBac9Hm~HCRO4FEu0hxyHOJOwgxPcEMFV3swZraD5-xTs6xA2WzfaUkB8jG9XVfWptfIZPU~Sn66plBl3AM2IPYPqkwVy1TnMBIZ6tUK4hv~ZYWSe1ChDOoE1N0mxe9njO1ifUMsAuny~cI-3FaXw5p0ZquwTS7veYa0O8cVwPapzhk-1gcsiI15UltHONZEawjMIU2J8yq89m2-sHT-r4EAw8fVZUf6j3W6i3xKJrIhqSDTLIAb0Kn5~Ns~luDL4Q6hE4DQhzk1NWhM4dvnb6QIhjXPjbvdrooMOUZ2-742GDk3toCPuq2u377shuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                },
                {
                    id:2,
                    name: "Guitar",
                    category: "Guitar",
                    url: "https://s3-alpha-sig.figma.com/img/735c/72ea/92bf0977c0bee2e038c8846650fc53d7?Expires=1567987200&Signature=UUuardDEOIWe9N9GAum2qQzZqWbtuqH3mnBnw8kdIFpPXQ~qlH-lCL4WXicArmdy8WrtbUKAphwTkCz8vvV58rgN9ZTsTth56xFzS9DyBtdOYP~EO4qzRgmFURvUpll6wggCXWEzO5tROlqBzdEtnpESGXRabfChpr~Q7VIg5VOfipTENCq8YCgWC~L9rR0FynIITS5bbAv3FyCR9vnYZgyRKG-z7RqdAX6z7F4QbD02BRLjZvZ3O9Qr0XCZq-bGh1R6kNP8XGqPARKbPPmlOkRn0mcD1Ex5rml9uc7VP86hJYMjEsvQM7oBMwaMEnDZIsVU-Kwb2kpKANdIw2FPRQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                },
                {
                    id: 3,
                    name: "Bass",
                    category: "Bass",
                    url: "https://s3-alpha-sig.figma.com/img/4e92/497e/54373c42a2228a802275097599efa00b?Expires=1567987200&Signature=NdYiCt9JNqIU9cJzE9obc6EgLW5P13AZX0lODgNO0UseyQ~hGDNHDpa2wwuSNajBbDgt09UOvSB-ghDHxCl0TM0QTJjAgFUgoQOp9ZEoTdNuIvbrpN7T~b32MEVPxyXDgZaKq24U81RSxG5FBF04KvS4WmQsOPisWL4Cz5UBWTD4AYTabrPvalQ6vGf24lw6CWxjiOFsGoPuBio6xpCz~EvcjfVlBssL5yOSFKPjhvEleIpJMGqSOyu1Fnku-gbByV4Mbkp20P9bSkhcQ8-STmCtNm6-ehfdt4SY5EhaSi45kNs3Epz2pLSru6SEX-kVBJsx~ZSpjWI3Q6B~bWBMdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                },
                {
                    id: 4,
                    name: "Harp",
                    category: "Harp",
                    url: "https://s3-alpha-sig.figma.com/img/3493/630a/d63a8fea63fcff9952b2ecaab1a546fe?Expires=1567987200&Signature=M8SuRLvN8bQ2914Hg7YwuvGww7O3HP9XoC9EYpNwSbji7n~LDXFUIwnpzGbOrteLWva7seiyv9NaGUNh5M8TYXf4H-XIRLNdaSohEfedabhmWBHc5VQBq6j~i8Y0cEEK5fTDVqzHrulpc7vfbLiXLg11I4gzvoCQLHd9zRftktkx5tZ2XCIx1mTWwCKwY20n-BKidrn1QYHmh94BAkXTKnnjjXrComFvIV-UFKat6KKPAfqg23NHLtR5g2ftIW7jovLFldj1AVPgJbxhigOI-XzaJuPn946~lGHs773YE57RHUP~bQE97yzvJn7DUxYs2Ztm54hEBBiw~YREMLNniA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                },
                {
                    id: 5,
                    name: "Ukulele",
                    category: "Ukelele"     ,
                    url: "https://s3-alpha-sig.figma.com/img/7eac/a29a/b120ebf0be357a016d3ea73a49b33828?Expires=1567987200&Signature=e4Qku9fBBmn1c2qGscWvlNcdisuVUyBriYAEE6sTih0Clsh5NfnLqyLME4psX5kd-jXoXR~RP2V0lfuM9hcKPIxlFuYsHVCyILuB5lM5uJvLMNECT48QKlJCVqSKMhth8XiklHYrWouvub~HpFqYUGZ6eOsYYjJBkVcY0DqiKB-VVxA9-f9tGVf1doavtNpnG~Mq8a7rdulxwc4MLXALyMJym3HTwZOsCdcqHUrSUicnroMcDrkKd4N85e5C-8JYWwIPQsXuceMjRf3kVWt2wmaGVvxYBSCmQT3Kz7FiiP9IVimFLi6d3~Rlsgaou6ypTnymEESoLjxlFAV7DDTT5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                },
            ], 
            search: ''
        }

    addData = (result) =>{
        if (Object.keys(result).length > 0){
            this.state.data.push(result);

            this.setState({data : this.state.data})
        }else{
            alert("Data harus di isi !!")
            window.location.reload()
        }
    }

    
    


    render(){

        const {data, search} = this.state;

        
        
        const filtered = data.filter(data =>
            data.name.toLowerCase().includes(search.toLowerCase())
        )

        return (
            <Fragment>
                <div className="search">
                    <div className="col-lg-12" style={{ backgroundColor: "red" }}>

                        <div className="input-group col-lg-11 shadow p-0 mb-1 bg-white rounded" style={{ float: "left" }}>
                            <div className="input-group-prepend" >
                                <div className="input-group-text bg-white" style={{ border: 0 }}><i className="fa fa-search"></i></div>
                            </div>

                            <Search handleChange={e => this.setState({search:e.target.value})} />
                        </div>
                        <button className="btn btn-light shadow" style={{ float: "right", position: "absolute", right: 55 }}><i className="fa fa-gear"></i></button>

                    </div>
                </div>
                <div className="home">
                    <ModalLayer handle={this.addData}/>

                        {(filtered.length > 0) ? <CardHome key={data.id} data={filtered} /> : <h1 style={{ marginTop: 20, textAlign:"center" }} className="alert alert-danger">No Data</h1> }
                    
                    
                </div>
            </Fragment>
        )
    }

   
}

export default Home;
