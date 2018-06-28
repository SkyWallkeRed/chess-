export class User {
    private userName: string;
    private user_id: string;
    private userImg: string;
    private userEmail: string;
    private userProvider: string;
    constructor(user_id: string, userName: string, userEmail: string, userImg: string, userProvider: string) {
        this.user_id = user_id;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userImg = userImg;
        this.userProvider = userProvider;
    }

}
