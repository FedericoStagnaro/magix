import {
  Column,
  Entity,
  // OneToMany,
  PrimaryGeneratedColumn,
  // Relation,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  description: string;

  // @OneToMany('Product', (product: any) => product.categoryId)
  // product: Relation<'Product[]'>;
}
