package com.gdsc.backend.service;

import com.gdsc.backend.entity.Users;
import com.gdsc.backend.entity.enums.RoleType;
import com.gdsc.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {
    public UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Users updateUser(UUID id, Users data) {
        Users user = userRepository.getById(id);
        if(data.getStateType() != null) {
            user.setStateType(data.getStateType());
        }
        user.setRoleType(RoleType.USER);
        return userRepository.save(user);
    }
}
