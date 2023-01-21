import Announcement from "../model/Announcement";
import { IRepository } from "./IRepository";
import config, { ax } from "../config";
import UserResult from '../model/UserResult';

export interface AnnouncementFilter {
  keyword?: string
}

export class AnnouncementRepo implements IRepository<Announcement> {
  urlPrefix = config.remoteRepositoryUrlPrefix
  
  async getAll(filter: AnnouncementFilter): Promise<Announcement[] | null> {
    const params = {...filter}
    const resp = await ax.get<Announcement[]>(`${this.urlPrefix}/announcement`, { params })

    return resp.data
  }

  async get(id: string|number): Promise<Announcement | null> {
    const resp = await ax.get<Announcement>(`${this.urlPrefix}/announcement/${id}`)

    return resp.data
  }

  async create(entity: Partial<Announcement>): Promise<Announcement | null> {
    const resp = await ax.post<Announcement>(`${this.urlPrefix}/announcement`, entity)

    return resp.data
  }

  async update(entity: Partial<Announcement>): Promise<Announcement | null> {
    const resp = await ax.put<Announcement>(`${this.urlPrefix}/announcement/${entity.id}`, entity)

    return resp.data
  }

  async delete(id: string|number): Promise<void> {
    await ax.delete<void>(`${this.urlPrefix}/announcement/${id}`)
  }

  async getUserResult(id: string|number): Promise<UserResult[] | null> {
    const resp = await ax.get<UserResult[]>(`${this.urlPrefix}/announcement/${id}/results`)

    return resp.data
  }

  async upsertUserResult(id: string|number, entity: Partial<UserResult>[]): Promise<UserResult[] | null> {
    const resp = await ax.post<UserResult[]>(`${this.urlPrefix}/announcement/${id}/results`, entity)

    return resp.data
  }
}

