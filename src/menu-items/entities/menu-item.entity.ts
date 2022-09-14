import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column({ type: 'integer', default: null })
  parentId: number;

  @Column({ type: 'datetime' })
  createdAt: string;

  @JoinColumn({ name: 'id' })
  @OneToMany(() => MenuItem, (children) => children.children_1)
  children: MenuItem;

  @JoinColumn({ name: 'parentId' })
  @ManyToOne(() => MenuItem, (children) => children.children)
  children_1: MenuItem;
}
