import { 
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    Column,
    ManyToOne,
    UpdateDateColumn,
    ManyToMany,
    JoinTable,
    OneToMany,
 } from "typeorm";


 @Entity('product')
 export class ProductEntity {
     
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @CreateDateColumn()
   created: Date;

   @UpdateDateColumn()
   updated: Date;

   @Column('text')
   name: string;

   @Column('text')
   catergory: string;

   @Column('varchar')
   description: string;

   @Column('simple-array')
   images: Array<string>;

  //  @ManyToOne(type => UserEntity, owner => owner.products)
  //  owner: UserEntity;

  @Column('money')
  price: Number;


 }