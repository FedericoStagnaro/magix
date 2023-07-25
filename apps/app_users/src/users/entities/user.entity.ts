import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column()
  @Exclude() // Evita devolver el hash de contraseña
  password: string;

  @Column()
  birthday: Date;

  @Column({ type: 'integer' })
  @ManyToOne('Role', { nullable: false })
  @JoinColumn({
    name: 'role_id',
  })
  roleId: Relation<'Role'>;
}
