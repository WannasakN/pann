import { AnnouncementRepo } from "./announcementRepo";
import { UserResultRepo } from "./userResultRepo";

const Repo = {
    announcements: new AnnouncementRepo(),
    userResult: new UserResultRepo()
}

export default Repo