interface IRoom {
    roomId: string;
    createRoom(roomId: string): boolean;
}

class Room implements IRoom {
    roomId: string;
    createRoom(roomId: string): boolean {
        // TODO use dbcontroller abstraction to write and read into and from db
        
        this.roomId = roomId;
        return true;
    }
};
