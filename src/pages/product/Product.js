import React from "react";
import "./Produc.scss"
import { useState, useEffect } from "react";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import { storage } from "../../components/context/firebase";
import { v4 } from "uuid";
import { UserAuth } from "../../components/context/AuthContext";
import axios from "axios";

function Product() {
   

    return (
        <div className="product-storage">
           
        </div>
    );

}

export default Product;
