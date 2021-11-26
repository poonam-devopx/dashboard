import React from 'react'
import "./FeaturedInfo.css"
import DownloadIcon from '@mui/icons-material/Download';
function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$214</span>
                    <span className="featuredrate"><DownloadIcon/></span>
                    <span className="featuredMoney">Compared to last month </span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$214</span>
                    <span className="featuredrate"><DownloadIcon/></span>
                    <span className="featuredMoney">Compared to last month </span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$214</span>
                    <span className="featuredrate"><DownloadIcon/></span>
                    <span className="featuredMoney">Compared to last month </span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">collection</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$214</span>
                    <span className="featuredrate"><DownloadIcon/></span>
                    <span className="featuredMoney">Compared to last month </span>
                </div>
            </div>
            
        </div>
    )
}

export default FeaturedInfo
