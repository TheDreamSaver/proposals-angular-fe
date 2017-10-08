export class LoanApplication {
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
        public accountno?: number,
        public years?: number,
        public typeofloan?: string,
        public loanfor?: string,
        public myphoneno?: number
    ){}
}