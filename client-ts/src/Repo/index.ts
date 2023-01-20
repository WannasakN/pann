import { announcementRepo } from "./announcementRepo";
import { userResultRepo } from "./userResultRepo";

const Repo = {
    announcements: new announcementRepo(),
    userResult: new userResultRepo()
}

export default Repo