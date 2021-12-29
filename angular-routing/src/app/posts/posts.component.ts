import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts.service'
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  showIds = false;
  constructor(
    public postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  // constructor(private postsService: PostsService) {}
  

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      console.log('PaaaRams',params);
      // this.showIds = !!params.showIds
      this.showIds = !!params['showIds']
    })

    this.route.fragment.subscribe(fragment => {
      console.log('Fragmentooooo', fragment)
    })
  }

  showIdsProgram(){
      this.router.navigate(['/posts'], {
        queryParams: {
          showIds: true
        },
        fragment: 'program-fragment'
      })
  }

}



