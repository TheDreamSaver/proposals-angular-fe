export class StartUpJob {
    constructor(
        public id?: number,
        public empname?: string,
        public emporg?: string,
        public empaddress?: string,
        public empaddress2?: string,
        public myname?: string,
        public myaddress?: string,
        public myaddress2?: string,
        public dateofwriting?: string,
        public lastorg?: string,
        public keyactivities?: string,
        public specifics?: string,
        public experience?: string,
        public bestat?: string,
        public idealrole?: string,
        public portfolio_url: string = "http://",
        public linkedin_url: string = "http://",
        public myphoneno?: number
    ){}
}