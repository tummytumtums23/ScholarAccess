import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {
 		form: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
  constructor  (private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
    ) { }
  ngOnInit() {
  	 this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
      get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
       
    }
    pageSender(item){
    	if(item.value == "aryeman"){
    		
    		this.router.navigate(['student']);
    	}
    	else if(item.value == "kumar"){
    		console.info("THIS WORKS");
    		this.router.navigate(['/teacher']);
    	}

    }
  }


