import IFile from "./IFile";
import Region from "./Region";

export default interface IQuiz {
  id: string;
  name: string;
  regions: Region[];
  files: IFile[];
}
