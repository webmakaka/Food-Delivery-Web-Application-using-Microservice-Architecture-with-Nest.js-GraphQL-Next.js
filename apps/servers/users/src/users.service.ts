import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/Prisma.service';
import { LoginDto, RegisterDto } from 'src/dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;

    const user = {
      name,
      email,
      password,
    };

    return user;
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = {
      email,
      password,
    };

    return user;
  }

  async getUsers() {
    // const users = [
    //   {
    //     id: '1',
    //     name: 'marley',
    //     email: 'marley@example.com',
    //     password: 'marley@password',
    //   },
    // ];

    // return users;

    return this.prisma.user.findMany({});
  }
}
