import React, { Component } from 'react'
import axios from 'axios'


export default class SearchFood extends Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(e) {
        let getData = async () => {

            const { data } = await axios.get(`https://trackapi.nutritionix.com/v2/search/instant?query=${e.target.value}`, { 
                headers: {
                'Content-Type': 'application/json',
                'x-app-key': '6dee1641f74f21c24f192a7da16fd4c0',
                'x-app-id': 'ea208873',
                'x-remote-user-id': '0'
            }})
            this.props.sendResults(data)
        }
        getData = getData.bind(this)
        getData(e)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <input type="text" placeholder="search food" onChange={this.handleChange}/>
            </div>
        )
    }
}
