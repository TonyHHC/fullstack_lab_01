import {db} from "../db.js";

export const addTest = (_, res) => {

    return res.status(200).json("addTest ok");

};

export const updateTest = (req, res) => {

    return res.status(200).json("updateTest ok");

};

export const deleteTest = (req, res) => {

    return res.status(200).json("deleteTest ok");

};

export const insertTest = (req, res) => {

    return res.status(200).json("insertTest ok");

};

export const getTest = (_, res) => {

    var strSQL = "Select * From Employee";

    db.query(strSQL, (err, data) => {
        if(err) {
            return res.json(err);
        } else {
            return res.status(200).json(data);
        }
    });

    /*var jsonObj = {};

    jsonObj["aaa"] = "aaa";
    jsonObj["bbb"] = "bbb";
    jsonObj["ccc"] = "ccc";

    var jsonString = JSON.stringify(jsonObj);

    return res.status(200).json(jsonString);*/

};