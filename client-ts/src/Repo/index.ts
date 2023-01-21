import { AnnouncementRepo } from "./announcementRepo";
import { userResultRepo } from "./userResultRepo";

const Repo = {
    announcements: new AnnouncementRepo(),
    userResult: new userResultRepo()
}

export default Repo