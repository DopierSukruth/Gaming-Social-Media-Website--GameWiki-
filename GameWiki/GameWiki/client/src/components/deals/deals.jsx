import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const App = () => {
    // games
    const products = [
        {
            name: "FIFA 22",
            price: "₹1,512",
            image: "https://m.media-amazon.com/images/I/71aIQ2gpTHL._SX385_.jpg",
            link: "https://www.amazon.in/FIFA-22-for-PlayStation-5/dp/B098KS12NL/ref=sr_1_3?crid=1I1BY8VUARMKE&dib=eyJ2IjoiMSJ9.RsEPG_D6lhHyxQK1alDFILQlmr1JNC7ta2S2Ql_KNKpyRuINzOutwPuDfXZ09nlu6fAOmGm3jAM1p_13M-51SnQVEE",
            badge: "Special Offer",
        },
        {
            name: " Call of Duty: Modern Warfare II",
            price: "₹4,020",
            image: "https://m.media-amazon.com/images/I/614WI6kBnKL._SX679_.jpg",
            link: "https://www.amazon.in/ACTIVISION-Call-Duty-Modern-Warfare/dp/B0BKQGYKH3/ref=sr_1_1?crid=FC1KDH9ZYY5C&dib=eyJ2IjoiMSJ9.uxAXdmiQdpl3EjX2ORgsVDuGntSy_4G4J66QIOOzBC5vOoNT44BT6HTfFFSNTYwqvS3Hk5aDR4aCJVSOKH__d6hh8hpLXTDkWE7u9sdo0JvVDux4sOROo0XuC-jSwcsLg23iYg8eN51tPI4XXeTzbA2ts6t_-FiIAIbgV7XVlxVuCBzkFMst2mr1wOQF5MzyWLCM5MX0nDyvApQ-87lYkfO3WoCDs_WPwJSeh0g82f8.TJZKgvXTR9tXwr7l3oZqMwYH9-g-WffDc7xKiPmluXY&dib_tag=se&keywords=call+of+duty&qid=1732027583&s=videogames&sprefix=call+of+duty+%2Cvideogames%2C220&sr=1-1",
            badge: "Discount",
        },
        {
            name: "Grand Theft Auto V - Premium Edition",
            price: "₹1,299",
            image: "https://m.media-amazon.com/images/I/81cvVRtcznL._SX385_.jpg",
            link: "https://www.amazon.in/Grand-Theft-V-Premium-PS4/dp/B07D381RDJ/ref=lp_2591138031_1_3?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=ANQMB98C0RPJ3W99SREX&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&th=1",
            badge: "Lowest",
        },
        {
            name: "Cricket 24",
            price: "₹2,499",
            image: "https://m.media-amazon.com/images/I/81tgk5a6c6L._SX385_.jpg",
            link: "https://www.amazon.in/Cricket-24-Standard-PlayStation-4/dp/B0C1N2ZCPJ/ref=lp_2591138031_1_10?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=ANQMB98C0RPJ3W99SREX&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D",
            badge: "Best Seller",
        },
        {
            name: " Uncharted Collection",
            price: "₹1,280",
            image: "https://m.media-amazon.com/images/I/81d3I2ZnpOL._SX385_.jpg",
            link: "https://www.amazon.in/Sony-Uncharted-Collection-Hits-PS4/dp/B07M5V17R9/ref=sr_1_10?dib=eyJ2IjoiMSJ9.MAhwnx5SmoMsUJlhtkvbjzB-gPeSdIiOpDorrC_gaK9Agww3Akyx3gmsE69MIOv6rSv_hwxlo9iXoGtaRfo2gTnByYpToA6GjUYUuO9QUP6uSCxxz-kQ5ZLQra7Z7NSRz90keau8oxTIssK5k5YoXYYQ5tXjfJ2SXzzty0HnyWQH7eMNeK6ixdIf3tKpAbD2nE1Yn9V6uO3uE3bned2uLHe5SMwQH2CaWrlTIra9ZqI.4X_RJ_xi9_mu1XUAzD-vmg2FD9cqojVhDDhPLe4olQA&dib_tag=se&qid=1732028173&s=videogames&sr=1-10&th=1",
            badge: "Special Pack",
        },


        {
            name: " Spider-Man: Miles Morales",
            price: "₹1,899",
            image: "https://m.media-amazon.com/images/I/811umGHYORL._SX385_.jpg",
            link: "https://www.amazon.in/PS4-Marvels-Spider-Man-Miles-Morales/dp/B08LFBM5JV/ref=sr_1_12?dib=eyJ2IjoiMSJ9.MAhwnx5SmoMsUJlhtkvbjzB-gPeSdIiOpDorrC_gaK9Agww3Akyx3gmsE69MIOv6rSv_hwxlo9iXoGtaRfo2gTnByYpToA6GjUYUuO9QUP6uSCxxz-kQ5ZLQra7Z7NSRz90keau8oxTIssK5k5YoXYYQ5tXjfJ2SXzzty0HnyWQH7eMNeK6ixdIf3tKpAbD2nE1Yn9V6uO3uE3bned2uLHe5SMwQH2CaWrlTIra9ZqI.4X_RJ_xi9_mu1XUAzD-vmg2FD9cqojVhDDhPLe4olQA&dib_tag=se&qid=1732029290&s=videogames&sr=1-12",
            badge: "User Pick",
        },



        {
            name: "Ea Sports Fc 24",
            price: " ₹2,875",
            image: "https://m.media-amazon.com/images/I/81PX1wwqq9L._SX385_.jpg",
            link: "https://www.amazon.in/EA-Sports-FC-Standard-PlayStation/dp/B0CBTV3SQM/ref=s9_acsd_al_ot_c2_x_2_t?_encoding=UTF8&pf_rd_m=A21TJRUUN4KGV&pf_rd_s=merchandised-search-18&pf_rd_r=27HGNHZQWA895ZGPJVFB&pf_rd_p=2ef2f0a8-7d3d-4c55-b8e6-6c39d53db852&pf_rd_t=&pf_rd_i=2591138031",
            badge: "Top Pick",
        },



        {
            name: "WWE 2K24 ",
            price: "₹2,438",
            image: "https://m.media-amazon.com/images/I/81oc5fQhrHL._SX385_.jpg",
            link: "https://www.amazon.in/WWE-2K24-Standard-PlayStation-4/dp/B0CTHJ8XTG/ref=sr_1_15?dib=eyJ2IjoiMSJ9.MAhwnx5SmoMsUJlhtkvbjzB-gPeSdIiOpDorrC_gaK9Agww3Akyx3gmsE69MIOv6rSv_hwxlo9iXoGtaRfo2gTnByYpToA6GjUYUuO9QUP6uSCxxz-kQ5ZLQra7Z7NSRz90keau8oxTIssK5k5YoXYYQ5tXjfJ2SXzzty0HnyWQH7eMNeK6ixdIf3tKpAbD2nE1Yn9V6uO3uE3bned2uLHe5SMwQH2CaWrlTIra9ZqI.4X_RJ_xi9_mu1XUAzD-vmg2FD9cqojVhDDhPLe4olQA&dib_tag=se&qid=1732029290&s=videogames&sr=1-15",
            badge: "Discount",
        },




        {
            name: "EA Sports FC 25 ",
            price: "₹4,8440",
            image: "https://m.media-amazon.com/images/I/61TpNB8+HmL._SX679_.jpg",
            link: "https://www.amazon.in/EA-Sports-FC-Standard-PlayStation/dp/B0D9NF2J2V/ref=sr_1_9?dib=eyJ2IjoiMSJ9.MAhwnx5SmoMsUJlhtkvbjzB-gPeSdIiOpDorrC_gaK9Agww3Akyx3gmsE69MIOv6rSv_hwxlo9iXoGtaRfo2gTnByYpToA6GjUYUuO9QUP6uSCxxz-kQ5ZLQra7Z7NSRz90keau8oxTIssK5k5YoXYYQ5tXjfJ2SXzzty0HnyWQH7eMNeK6ixdIf3tKpAbD2nE1Yn9V6uO3uE3bned2uLHe5SMwQH2CaWrlTIra9ZqI.4X_RJ_xi9_mu1XUAzD-vmg2FD9cqojVhDDhPLe4olQA&dib_tag=se&qid=1732029290&s=videogames&sr=1-9",
            badge: "Latest",
        },





    ];

    return (

        <div className="app">
            <Link to="/home" className="home-button">
        Home
      </Link>


            <div className="content">
                {/* Filter Sidebar */}
                <aside className="filters">
                    <h4>Keywords</h4>
                    <div className="tags">
                        <span className="tag">FPS ×</span>
                        <span className="tag">Co-op ×</span>
                    </div>
                    <div className="filter-group">
                        <h5>Platforms</h5>
                        <label>
                            <input type="checkbox" defaultChecked /> Ecommerce Website
                            (Amazon, Flipkart)
                        </label>
                        <label>
                            <input type="checkbox" defaultChecked /> Digital Platforms (Steam,
                            Epic Games)
                        </label>
                        <label>
                            <input type="checkbox" defaultChecked /> Offline Sellers
                            (City-based)
                        </label>
                    </div>
                    <div className="filter-group">
                        <h5>Price Range</h5>
                        <input type="range" min="0" max="100" />
                        <p>₹0- ₹5,000</p>
                    </div>
                    <div className="filter-group">
                        <h5>Narrow by OS</h5>
                        <label>
                            <input type="checkbox" defaultChecked /> Windows
                        </label>
                        <label>
                            <input type="checkbox" defaultChecked /> Linux
                        </label>
                        <label>
                            <input type="checkbox" defaultChecked /> MacOS
                        </label>
                    </div>
                    <div className="filter-group">
                        <h5>Tags</h5>
                        <label>
                            <input type="checkbox" defaultChecked /> Action
                        </label>
                        <label>
                            <input type="checkbox" defaultChecked /> Indie
                        </label>
                        <label>
                            <input type="checkbox" defaultChecked /> Casual
                        </label>
                    </div>
                </aside>

                {/* Main Content */}
                <section className="main">
                    <div className="product-grid">
                        {/* Render each product */}
                        {products.map((product, index) => (
                            <div className="product-card" key={index}>
                                <a href={product.link} target="_blank" rel="noopener noreferrer">
                                    <div className="image-placeholder">
                                        {product.badge && <span className="badge">{product.badge}</span>}
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                    <p>{product.name}</p>
                                    <p>{product.price}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default App;
