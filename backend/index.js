import express from "express";
import cors from "cors";
import { readFile } from 'fs/promises';

const app = express();

app.use(cors());



app.get("/", async (req, res) => {

  try {
    const people = JSON.parse(await readFile("./people.json", "utf8"));
   
    if(!!Object.keys(req.query).length) {
      const searchTerm = Object.values(req.query).toString()
      const filteredPeople = people.filter((person) => person.name.toLowerCase().includes(searchTerm))
      res.send(filteredPeople);
      
    } else {
      res.send(people);
    }

  } catch (error) {
    console.error(error);
  }

});

app.get("/:id", async (req, res) => {

  try {
    const people = JSON.parse(await readFile("./people.json", "utf8"));
    const id = req.params.id;
    const person = await people.filter((person) => person.url.slice(-2,-1) === id)
    res.send(person.flat());

  } catch (error) {
    console.error(error);
  }

});



app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
