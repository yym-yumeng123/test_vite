<template>
  <div :class="{'layout': true, [direction]: true, 'active': active}" @click="handleSelectLayout">
    <div class="main">
      <i v-for="i in 3" :key="i" class="item" />
    </div>
    <div class="footer">
      <div class="bar"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  direction: { type: String, default: "bottomTopVertical" },
  active: { type: Boolean, default: false },
});

const emit = defineEmits(["selectLayout"]);

const handleSelectLayout = () => {
  console.log(props.direction)
  emit("selectLayout", props.direction)
}
</script>

<style lang="less" scoped>
.layout {
  display: flex;
  padding: 8px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0.2px hsla(var(--system-color-grey-100-hsl), 0.7),
    0 0 0 0.2px hsla(var(--system-color-grey-900-hsl), 0.7),
    #0000004d 2px 5px 19px 7px;
  &:hover {
    outline: 2px solid #1677ff;
  }
  .main {
    display: flex;
    .item {
      width: 20px;
      height: 20px;
      background: #1677ff;
    }
  }
  &.bottomTopVertical,
  &.topBottomVertical,
  &.bottomTopHorizontal,
  &.topBottomHorizontal {
    .footer {
      display: flex;
      justify-content: center;
      .bar {
        width: 100px;
        height: 20px;
        border-radius: 10px;
        background: rgba(62, 37, 30, 0.5);
      }
    }
  }
  &.bottomTopVertical,
  &.topBottomVertical {
    flex-direction: column;
    .main {
      flex-direction: column;
      .item {
        margin-bottom: 8px;
      }
    }
  }
  &.bottomTopHorizontal {
    flex-direction: column;
    .main {
      height: 84px;
      .item {
        margin-right: 8px;
      }
    }
  }
  &.topBottomVertical {
    flex-direction: column-reverse;
  }
  &.topBottomHorizontal {
    flex-direction: column-reverse;
    .main {
      height: 84px;
      .item {
        margin-right: 8px;
      }
    }
  }

  &.leftRightVertical,
  &.leftRightHorizontal,
  &.rightLeftVertical,
  &.rightLeftHorizontal {
    .footer {
      .bar {
        width: 20px;
        height: 100px;
        border-radius: 10px;
        background: rgba(62, 37, 30, 0.5);
      }
    }
  }

  &.leftRightVertical {
    .footer {
      order: -1;
    }
    .main {
      flex-direction: column;
      margin-left: 8px;
      .item {
        margin-bottom: 8px;
      }
    }

  }

  &.leftRightHorizontal {
    .main {
      .item {
        margin-left: 8px;
      }
    }
    .footer {
      order: -1;
    }
  }

  &.rightLeftVertical {
    justify-content: space-between;
    .main {
      flex-direction: column;
      .item {
        margin-bottom: 8px;
      }
    }
  }

  &.rightLeftHorizontal {
    justify-content: space-between;
    .main {
      .item {
        margin-right: 8px;
      }
    }
  }
}

.active {
  outline: 2px solid #1677ff;
}
</style>