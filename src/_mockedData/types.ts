export interface User {
    id : number ;
    name : string ;
    email : string ;
    role : "Admin" | "User" | "Editor" ;
    status : 'Active' | 'Inactive' | 'Pending';
    joinDate : string ;
    revenue : number ;   
}
export interface ChartData {
    name : string ; 
    users : number ;
    revenue : number ;
}
export interface PieData {
    name : 'Active' | 'Inactive' | 'Pending';
    value : number ; 
    color : string;
}