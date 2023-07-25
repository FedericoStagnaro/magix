import { Injectable } from '@nestjs/common';
import { genSaltSync, hashSync, compareSync } from 'bcrypt';

@Injectable()
export class PasswordService {
  /**
   * Encrypt password, using bcrypt library.
   * @param passwordPlainText Password to hash
   * @returns Password encrypted
   */
  enconde(passwordPlainText: string): string {
    const saltRounds = 10;
    const salt = genSaltSync(saltRounds);
    const passwordHash = hashSync(passwordPlainText, salt);
    return passwordHash;
  }

  /**
   * Check password
   * @param passwordPlainText Password to compare
   * @param passwordHash PasswordHash to match
   * @returns boolean
   */
  decode(passwordPlainText: string, passwordHash: string): boolean {
    return compareSync(passwordPlainText, passwordHash);
  }
}
