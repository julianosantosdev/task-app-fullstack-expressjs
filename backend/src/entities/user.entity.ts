import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import Task from './task.entity'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid') id: string

  @Column() name: string

  @Column({ unique: true }) email: string

  @Column() password: string

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[]
}

export default User
