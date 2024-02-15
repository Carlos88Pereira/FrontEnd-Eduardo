const app=Vue.createApp(
    {
        data()
        {
            return{
                productName: "Cruise Ship",
                productDescription: "Cruise Ship Description",
                productSubtitle: "Subtitle of page",
                ship: "https://media.istockphoto.com/id/104241367/pt/foto/barco-de-cruzeiro.jpg?s=1024x1024&w=is&k=20&c=QN8uz9IxTVxW5he8hbQYQKgIros565hyC-iXSoedwJM=",
                substyle: {'background-color': "navy", 'color' : "blue"},
                altText: "Nice picture",
                styleing: {"border-width": "10px", "border-style": "solid"}
        }
    }
    }
)
app.mount("#app")