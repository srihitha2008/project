package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository repository;
	
	@Autowired
	private MentorRepository mentorRepository;
	
	@Override
	public User create(User user) {
		// TODO Auto-generated method stub
		return repository.save(user);
	}

	@Override
	public User delete(Long id) {
		// TODO Auto-generated method stub
		User user = findById(id);
		if(user != null)
		{
			repository.delete(user);
		}
		return user;
	}

	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	public User findById(Long id) {
		// TODO Auto-generated method stub
		return repository.findOne(id);
	}

	@Override
	public User update(User user) {
//		 TODO Auto-generated method stub
		return repository.save(user);
	}

	@Override
	public List<User> findByUsernameAndPassword(String userName, String password) {
		// TODO Auto-generated method stub
//		User user = repository.findByUserNameAndPassword(username, password);
//		if(user!=null)
//		{
//			System.out.println("User found");
//			return true;
//		}
//		else
//		{
//			System.out.println("User not found");
//		}
//		if(user != null)
//		{
//			repository.findByUserNameAndPassword(username, password);
//		}
//		else
//		{
//			System.out.println("User not found");
//			return null;
//		}
//		return user;
		return  repository.findByUsernameAndPassword(userName, password);
	}

	@Override
	public List<User> findByActive(Boolean active) {
		// TODO Auto-generated method stub
		return repository.findByActive(active);
	}

	@Override
	public List<Mentor> findByMentorId(Long id) {
		// TODO Auto-generated method stub
		return mentorRepository.findByMentorId(id);
	}

	

}
