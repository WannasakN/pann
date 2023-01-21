import Announcement from "../model/Announcement";
import { IRepository } from "./IRepository";
import config, { ax } from "../config";

export interface AnnouncementFilter {
    keyword?: string
}

export class announcementRepo implements IRepository<Announcement> {
    urlPrefix = config.remoteRepositoryUrlPrefix

    async getAll(filter: AnnouncementFilter): Promise<Announcement[] | null> {
        const params = {...filter}
        const resp = await ax.get<Announcement[]>(`${this.urlPrefix}/announcement`,{params})
        return resp.data
    }
}

