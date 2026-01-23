<template>
    <div :class="[
        'b-card',
        `b-card--type-${type}`,
        `b-card--size-${size}`,
        `b-card--shadow-${shadow}`
    ]">
        <!-- 1. Media Header -->
        <div v-if="$slots.header" class="b-card__header-media">
            <slot name="header"/>
        </div>

        <div class="b-card__body">
            <!-- 2. Title & Subtitle Section -->
            <div v-if="$slots.title || title || $slots.subtitle || subtitle" class="b-card__title-group">
                <div v-if="$slots.title || title" class="b-card__title">
                    <slot name="title">{{ title }}</slot>
                </div>
                <div v-if="$slots.subtitle || subtitle" class="b-card__subtitle">
                    <slot name="subtitle">{{ subtitle }}</slot>
                </div>
            </div>

            <!-- 3. Main Content Area -->
            <div class="b-card__content">
                <slot name="content">
                    <slot/>
                </slot>
            </div>
        </div>

        <!-- 4. Footer -->
        <div v-if="$slots.footer" class="b-card__footer">
            <slot name="footer"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {cardProps} from './card.types.ts'
import './card.css'

defineOptions({name: 'BCard'})
defineProps(cardProps)
</script>