import React, { useEffect, useState } from "react";

const companies = [
	{
		name: "AMZ",
		id: 1,
	},
	{
		name: "FLP",
		id: 2,
	},
	{
		name: "SNP",
		id: 3,
	},
	{
		name: "MYN",
		id: 4,
	},
	{
		name: "AZO",
		id: 5,
	},
];

const categories = [
	{
		id: 1,
		categoryName: "Phone",
	},
	{
		id: 2,
		categoryName: "Computer",
	},
	{
		id: 3,
		categoryName: "Tv",
	},
	{
		id: 4,
		categoryName: "Earphone",
	},
	{
		id: 5,
		categoryName: "Tablet",
	},
	{
		id: 6,
		categoryName: "Charger",
	},
	{
		id: 7,
		categoryName: "Mouse",
	},
	{
		id: 8,
		categoryName: "Keypad",
	},
	{
		id: 9,
		categoryName: "Bluetooth",
	},
	{
		id: 10,
		categoryName: "Pendrive",
	},
	{
		id: 11,
		categoryName: "Remote",
	},
	{
		id: 12,
		categoryName: "Speaker",
	},
	{
		id: 13,
		categoryName: "Headset",
	},
	{
		id: 14,
		categoryName: "Laptop",
	},
	{
		id: 15,
		categoryName: "PC",
	},
];

const API_STATUS = {
	initial: "INTIAL",
	loading: "LOADING",
	success: "SUCCESS",
	failure: "FAILURE",
};
const defaultCompany = "AMZ";
const defaultCategory = "Phone";
export const Products = () => {
	const [activeCompany, setActiveCompany] = useState(defaultCompany);
	const [actCategory, setActCategory] = useState(defaultCategory);

	const [data, setData] = useState([]);
	const [apiStatus, setApiStatus] = useState(API_STATUS.initial);
	const [authToken, setAuthToken] = useState("");

	const fetchAuthToken = async () => {
		setApiStatus(API_STATUS.loading);

		const raw = JSON.stringify({
			companyName: "Annamacharya Institute of Technology & Sciences, Tirupati",
			clientID: "96628d71-dea0-4d29-878f-b044f7936478",
			clientSecret: "wzfzmauRNRlDkjtJ",
			ownerName: "Vinay Kumar Reddy Mangalampenta",
			ownerEmail: "mangalapentavinaykumarreddy30@gmail.com",
			rollNo: "21AK1A3644",
		});

		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: raw,
			mode: "no-cors",
		};

		const response = await fetch(
			"https://cors-anywhere.herokuapp.com/http://20.244.56.144/test/auth",
			requestOptions
		);

		// if (!response.ok) {
		// 	const result = await response.json();
		// 	console.log(result);
		// }
		// console.log("difhoi");

		console.log("response", response);
	};

	useEffect(() => {
		fetchAuthToken();
	}, []);
	return (
		<div className="px-3">
			<h1 className="text-4xl my-3 text-left font-semibold">Products</h1>
		</div>
	);
};
