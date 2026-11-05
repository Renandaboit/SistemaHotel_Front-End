import { listar } from "../../api/room";

async function loadRooms() {
    const roomList = await listar(); // Falta mudar o método -----------
    
    const mainRooms = document.getElementById("three-rooms");

    roomList.forEach(room => {
        
        
    });
}