export class Recipe{
    public Name: string;
    public Description: string;
    public ImagePath: string;
    
    constructor(name:string, description:string, imageUrl:string)
    {
        this.Name = name;
        this.Description = description;
        this.ImagePath = imageUrl;    
    }
}