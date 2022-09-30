import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
    pdfSrc = "/assets/HuangCrystal_Resume.pdf";
    linkedinLink = "https://www.linkedin.com/in/crystalchuang/";
    githubLink = "https://github.com/cdecry";
}