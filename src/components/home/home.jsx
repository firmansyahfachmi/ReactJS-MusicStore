import React, {Component} from 'react';

import Card from "../card/card.jsx";
import './home.css';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            data : [
                {
                    id: 1,
                    name: "Viollin",
                    price: "Rp. 2.500.000",
                    img:"https://s3-alpha-sig.figma.com/img/1d00/3227/47842acb21ef766a28693a6f8f5a6dae?Expires=1567382400&Signature=B7wPjoLGaott30E78oLTO8hCLfWzQVAAWNhFWCfb6Egg~pMNhe~U~K-rUp6eqWIVlpWAE8q5NTZiQoiDfjBZZOZt4wFV76OA9U~3hfH~7TzOrN-aaFNnQSM97gClLAo3dY2i7smIL49r87I3QdGOSO9mhNqoMCzpZ4-VKgjE6j2M9Eg~GW53uQMm9mt6COigVWLcWswkHGsucGLAWNJeWslt7cnlOuk9rMdGqB5MjDwKmfX5R5ment6zsTnJOsKwNl1QTPNpn2xZxnJfB0FSo8eLlDMV1nfg67MDB7Q87EZlV7g419v8ZE62l0LZFMVaTcPueyRjSBePHIU4zdRO-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed blandit nibh. Proin at pharetra purus. Cras pellentesque tincidunt dui vitae euismod."

                },
                {
                    id: 2,
                    name: "Guitar",
                    price: "Rp. 1.500.000",
                    img: "https://s3-alpha-sig.figma.com/img/735c/72ea/92bf0977c0bee2e038c8846650fc53d7?Expires=1567382400&Signature=TBK~JFl7679noCe~n3MN9MVMATl08xja0SHN9NEBVYwaShZbYY84QYNFK953p0T3AgfGCr4G2M68JKe5jmUVevQx3JTlwmhfQj2LuUJcWCd1~MN54vs5JvI7VptZDnBeDld0EbpkyMlZ50V-Wy-3R3hXS5iaeFoq52gtaeNSuMCO~ezAiMNcrqFyDwP~F7X0aPHsZU7qnruManAz4unmAu3LatPKaPwTDp3~6RuoQeEoRpsWHNnzgHGMsjQHpsvpJBtURcHGDGggvnle-qmbpsSOwfR5xKTYOld5LkVd9iLBYzMmbi-APq1mVJoxw-XVmbtxSCgwi2EO3JHsiA-gHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed blandit nibh. Proin at pharetra purus. Cras pellentesque tincidunt dui vitae euismod."

                },
                {
                    id: 3,
                    name: "Bass",
                    price: "Rp. 2.000.000",
                    img: "https://s3-alpha-sig.figma.com/img/4e92/497e/54373c42a2228a802275097599efa00b?Expires=1567382400&Signature=c94kYKwjtWha3QeKaDj88JkHlhLvkA85GK7T0RNzw25X79dY9pFsqG1tk3Pc0gK9CMcJBfpsSM3u6Dkj9ckCRIWvgkTY128q2YZ0MXistj4CGv9I3vHDuzkyYGxE7UlkD9t9fE0STVX6JD8D-tvoclZ8P9Ddf2svDMw20LoH8UnmNJ7dINPIdINd1XlB1NtHHEKZhEA661lM0YXiBdlcPL-6tQtXupz8DYKSraa7FI8tAbXqLJ1zdtc1H0sXbAZIghJ530uqyM4OideDPpBvZ1Ac508inTcOqPa2Dd-rQAZVLw7xXMS4fQut6-k9gnuGHJofMXlgaUCN6BptCqySWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed blandit nibh. Proin at pharetra purus. Cras pellentesque tincidunt dui vitae euismod."

                },
                {
                    id: 4,
                    name: "Harp",
                    price: "Rp. 3.000.000",
                    img: "https://s3-alpha-sig.figma.com/img/3493/630a/d63a8fea63fcff9952b2ecaab1a546fe?Expires=1567382400&Signature=WSMq5kYslCEfFeEzGPXnJK5mXuvsYJcKW0JiNbyY2wD1Nrl87e8iRUGpEcIDVxdIdfCYh1KCSgjMWcnfptY9ZS12SU44wS6MCjN0pDpFghSx-FuBbYNltrqovY-~rnRJfl-l7UTEC1vWkF0hp2c3vvpQS~ZsU3oH~jhs95aZT-SbQzwJuqDnxk1E7ShgS2~oqxDYG9TtyXufES9qpr~XtUXbisW9nsXj6OHtv6zWbKJmWjsHNSTmmyAMrjiKwhrcta60cOqb9IZ3BPGoUjg3Z5u36g142eEcwl4ZfY0-yxR1WNpmL~a16Eqm~xH1XwdULPrzH699cIuYJF87RcbveQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed blandit nibh. Proin at pharetra purus. Cras pellentesque tincidunt dui vitae euismod."

                },
                {
                    id: 5,
                    name: "Ukulele",
                    price: "Rp. 1.200.000",
                    img: "https://s3-alpha-sig.figma.com/img/7eac/a29a/b120ebf0be357a016d3ea73a49b33828?Expires=1567382400&Signature=Due4EFx2ZD12IOxI3JPbbo4mPDRuKh3iWjC5-aiLJYm9DDHRdW0rTnb-eY09b~0ZrDlL3jVBcuMDjQOW67VNWSde24HMmX134zCL6-Yie3Io3gG5hBprd46VfoayItBC~Wj~szIJCxYbHwc8Um5IBvk8ohCgZ7OqIteR8jjMyB1chdcnCHhYZOljgzHXZuDafOzP7vEN76DDmjTnJG-75pZOsvRpb~YsmiQ~WnkBba8vx50iyEQt5FnpjCaNVHSY7nlONoJmmviW-4qCHj3jOfpUD22Vkdc2oo22MmDGPIwKEsAIbDVxfteSdyDuNFrnvFn~OjqAmUYcM9CX-ZHvuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed blandit nibh. Proin at pharetra purus. Cras pellentesque tincidunt dui vitae euismod."

                },
            ]
        }
    }


    render(){
        return (
            <div className="home">
                <button className="btn" style={{ color: "white", paddingLeft: 30, paddingRight: 30, backgroundColor:"#E28935"}}>Add</button>

                <Card data={this.state.data}/>
                
            </div>
        )
    }
}

export default Home;
