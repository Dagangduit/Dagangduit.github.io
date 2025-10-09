import { Repository } from '../services/github';

export default class ProjectModel {
  private constructor(
    public id: number,
    public owner: {
      id: number;
      login: string;
      avatar_url: string;
      html_url: string;
    },
    public fullName: string,
    public name: string,
    public htmlUrl: string,
    public description: string,
    public language: string,
    public forksCount: number,
    public stargazersCount: number,
    public openIssuesCount: number,
    public archived: boolean,
    public disabled: boolean,
    public pushedAt: string,
    public createdAt: string,
    public updatedAt: string
  ) {}

  static from(raw: Repository): ProjectModel {
    return new ProjectModel(
      raw.id,
      raw.owner,
      raw.full_name,
      raw.name,
      raw.html_url,
      raw.description,
      raw.language,
      raw.forks_count,
      raw.stargazers_count,
      raw.open_issues_count,
      raw.archived,
      raw.disabled,
      raw.pushed_at,
      raw.created_at,
      raw.updated_at
    );
  }
}
