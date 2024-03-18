import { fakeAsync, TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../models/user';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should get the user info', fakeAsync(() => {
    const user = new User({ username: 'toto1' });
    let value: User;
    service.getUserInfo().subscribe((userInfo) => {
      console.log(userInfo);
      value = userInfo;
    });
  }));
});
