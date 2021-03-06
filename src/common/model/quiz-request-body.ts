export default class QuizRequestBody {
  public constructor(
    public readonly question: string,
    public readonly answer: string,
    public readonly description: string,
    public readonly imageURL: string,
    public readonly isChoice: number,
    public readonly option1?: string,
    public readonly option2?: string,
    public readonly option3?: string,
    public readonly option4?: string
  ) {}
}
