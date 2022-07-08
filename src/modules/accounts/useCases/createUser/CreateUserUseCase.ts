import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({name, username, password, email, driver_license}: ICreateUserDTO) {
    this.userRepository.create({name, username, password, email, driver_license});
  }
}

export { CreateUserUseCase };
