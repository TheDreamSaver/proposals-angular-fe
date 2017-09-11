import { Component } from '@angular/core';
import { Document } from './document';

@Component({
    moduleId: module.id,
    selector: 'documents',
    templateUrl: 'documents.component.html',
    styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
    documents: Document[] = [
        {
            title: "My First Doc",
            description: "Blah. Blah. Blah.",
            file_url: "http://google.com",
            updated_at: "5/9/17",
            image_url: "https://static.pexels.com/photos/56759/pexels-photo-56759.jpeg"
        },
        {
            title: "My Second Doc",
            description: "Blah. Blah. Blah.",
            file_url: "http://google.com",
            updated_at: "5/9/17",
            image_url: "https://membermouse.com/wp-content/uploads/2016/09/Freelancer-Liability-Featured.png"
        },
        {
            title: "My Last Doc",
            description: "Blah. Blah. Blah.",
            file_url: "http://google.com",
            updated_at: "5/9/17",
            image_url: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/07/freelancer.jpg"
        }
    ]
}