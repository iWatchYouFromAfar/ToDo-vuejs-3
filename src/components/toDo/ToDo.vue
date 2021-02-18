<template>
  <div class="add-task">
    <input
      type="text"
      :value="valueInput"
      @input="handleInput"
      @keypress.enter="addTask"
    >
    <Button
      name="Добавить таск"
      @click="addTask"
    />
  </div>
  <div class="tasks-list">
    <h2>
      <span>Нужно сделать</span>
      <span class="tasks-list__total">{{ toDoList.length }}</span>
    </h2>
    <ul class="tasks-list__list">
      <li
        v-for="(task, index) in toDoList"
        :key="task.id">
        <div>
          <input type="checkbox"
                 :id="task.id"
                 @change="checkToDo(index, 'toDo')"
          />
          <label
            :for="task.id">
            {{ task.title }}
          </label>
        </div>
        <Button
          name="Удалить таск"
          btn-class="btn-remove"
          @click="removeTask(index, 'toDo')"
        />
      </li>
    </ul>
    <h2>
      <span>Выполнено</span>
      <span class="tasks-list__total">{{ completedToDoList.length }}</span>
    </h2>
    <ul class="tasks-list__list tasks-list__list_completed">
      <li
        v-for="(task, index) in completedToDoList"
        :key="task.id">
        <div>
          <input type="checkbox"
                 :id="task.id"
                 @change="checkToDo(index, 'completed')"
                 checked
          />
          <label
            :for="task.id">
            {{ task.title }}
          </label>
        </div>
        <Button
          name="Удалить таск"
          btn-class="btn-remove"
          @click="removeTask(index, 'completed')"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Button from '@/components/ui/buttons/Button.vue';

export default {
  components: {
    Button,
  },
  data() {
    return {
      valueInput: '',
      toDoList: [],
      completedToDoList: [],
    };
  },
  methods: {
    handleInput(event) {
      this.valueInput = event.target.value;
    },
    addTask() {
      if (this.valueInput === '') {
        return;
      }
      this.toDoList.push({
        id: Math.random(),
        title: this.valueInput,
      });
      this.valueInput = '';
    },
    checkToDo(index, type) {
      if (type === 'toDo') {
        const completedTask = this.toDoList.splice(index, 1);
        this.completedToDoList.push(...completedTask);
      } else {
        const unCompletedTask = this.completedToDoList.splice(index, 1);
        this.toDoList.push(...unCompletedTask);
      }
    },
    removeTask(index, type) {
      const currentToDoList = type === 'toDo' ? this.toDoList : this.completedToDoList;
      currentToDoList.splice(index, 1);
    },
  },
};
</script>

<style lang="scss">
  .add-task {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
    @include sm-mobile {
      flex-direction: row;
      justify-content: center;
    }

    input {
      width: 300px;
      height: 40px;
      padding: 0 .7rem;
      margin-bottom: 1rem;
      border-radius: 2px;
      border: 1px solid #000000;
      font-size: 16px;
      box-sizing: border-box;
      outline: none;
      transition: all .15s ease-in-out;
      @include sm-mobile {
        margin-right: 1rem;
        margin-bottom: 0;
      }

      &:focus {
        border: 1px solid #42b983;
        transition: all .15s ease-in-out;
      }
    }
  }

  .tasks-list {
    margin-top: 1rem;

    h2 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 20px;
      margin: 25px 0;
      border-bottom: 1px solid #d5d5d5;
      font-weight: bold;
      font-size: 18px;
    }

    &__total {
      border-radius: 4px;
      border: 2px solid #42b983;
      font-size: 14px;
      font-weight: 700;
      padding: 5px 7px;
    }

    &__list {
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid black;
        background-color: #fff;

        input[type="checkbox"] {
          cursor: pointer;

          &:checked,
          &:not(:checked) {
            position: absolute;
            z-index: 1;
            opacity: 0;
            width: 20px;
            height: 20px;
            margin-top: 6px;
          }

          &:checked + label,
          &:not(:checked) + label {
            position: relative;
            padding-left: 35px;
            cursor: pointer;
          }

          &:checked + label {
            text-decoration: line-through;

            &::before {
              content: '';
              position: absolute;
              width: 16px;
              height: 16px;
              left: 0;
              top: calc(50% - 10px);
              background-color: transparent;
              border-radius: 50%;
              border: 2px solid #42b983;
            }

            &::after {
              content: '✔';
              position: absolute;
              width: 12px;
              height: 12px;
              transition: all .2s ease;
              opacity: 1;
              left: 4px;
              top: calc(50% - 6px);
              font-size: 14px;
              color: #42b983;
            }
          }

          &:not(:checked) + label {
            &::before {
              content: '';
              position: absolute;
              width: 16px;
              height: 16px;
              left: 0;
              top: calc(50% - 10px);
              background-color: transparent;
              border-radius: 2px;
              border: 2px solid #5d575f;
            }
          }
        }
      }

      &_completed {
        border-left-color: #999;
        opacity: .5;
      }
    }
  }
</style>
