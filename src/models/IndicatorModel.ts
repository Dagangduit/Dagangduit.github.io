export default class IndicatorModel {
  id: number;
  title: string;
  body: string;
  created_at: string;

  constructor(id: number, title: string, body: string, created_at: string) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.created_at = created_at;
  }

  static from(issue: any) {
    return new IndicatorModel(
      issue.number,
      issue.title,
      issue.body,
      issue.created_at
    );
  }
}
